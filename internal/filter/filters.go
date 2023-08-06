package filter

import (
	"encoding/json"
	"fmt"

	"github.com/TanmoySG/wunderDB/model"
	er "github.com/TanmoySG/wunderDB/pkg/wdb/errors"
)

const (
	DataErrorFormat = "[%s] %s : %s"

	fieldExist        = true
	fieldDoesnotExist = false
)

type Filter struct {
	Key   string      `json:"key"`
	Value interface{} `json:"value"`
}

func fieldExists(fieldKey string, dataMap map[string]interface{}) (bool, interface{}) {
	if data, exists := dataMap[fieldKey]; exists {
		return fieldExist, data
	}

	return fieldDoesnotExist, nil
}

func UseFilter(filter interface{}) (*Filter, *er.WdbError) {
	var dataFilter Filter

	filterJson, err := json.Marshal(filter)
	if err != nil {
		return nil, &er.FilterEncodeDecodeError
	}

	err = json.Unmarshal(filterJson, &dataFilter)
	if err != nil {
		return nil, &er.FilterEncodeDecodeError
	}

	return &dataFilter, nil
}

func filter(data map[model.Identifier]*model.Datum, filter Filter, iterator func(model.Identifier, model.Datum)) {
	if filter.Key == "id" {
		// search with primaryKey/id
		d, exists := data[model.Identifier(filter.Value.(string))]
		if exists {
			iterator(d.Identifier, *data[d.Identifier])
		}
	} else if filter.Key == "recordId" {
		// search with recordId
		for identifier, record := range data {
			if record.RecordId.String() == filter.Value {
				iterator(identifier, *record)
				break
			}
		}
	} else {
		// search with field value
		for identifier, record := range data {
			dataMap := record.DataMap()
			if exists, _ := fieldExists(filter.Key, dataMap); exists {
				if equal(dataMap[filter.Key], filter.Value) {
					iterator(identifier, *record)
				}
			}
		}
	}
}

func (f Filter) Filter(data map[model.Identifier]*model.Datum) map[model.Identifier]*model.Datum {
	filteredData := make(map[model.Identifier]*model.Datum)

	filter(data, f, func(id model.Identifier, record model.Datum) {
		filteredData[id] = &record
	})

	return filteredData
}

func (f Filter) Iterate(data map[model.Identifier]*model.Datum, iterator func(model.Identifier, model.Datum)) {
	filter(data, f, func(id model.Identifier, record model.Datum) {
		iterator(id, record)
	})
}

func equal(a, b interface{}) bool {
	// Type Irrespective Comparison
	return fmt.Sprint(a) == fmt.Sprint(b)
}
