package filter

import (
	"encoding/json"
	"fmt"

	"github.com/TanmoySG/wunderDB/model"
)

const (
	DataErrorFormat = "[%s] %s : %s"

	fieldExist        = true
	fieldDoesnotExist = false
)

type Filter struct {
	Key   string      `json:"key"`
	Value interface{} `json:"value"`
	// Filter operator - < / greater , > / lesser , = / equal , != / unequal
	// Operator string      `json:"operator"` // Future scope
}

func fieldExists(fieldKey string, dataMap map[string]interface{}) bool {
	if _, exists := dataMap[fieldKey]; exists {
		return fieldExist
	}

	return fieldDoesnotExist
}

func UseFilter(filter interface{}) (*Filter, error) {

	var dataFilter Filter

	filterJson, err := json.Marshal(filter)
	if err != nil {
		return nil, fmt.Errorf("error marshaling namespace file: %s", err)
	}

	err = json.Unmarshal(filterJson, &dataFilter)
	if err != nil {
		return nil, fmt.Errorf("error marshaling namespace file: %s", err)
	}

	return &dataFilter, nil
}

func filter(data map[model.Identifier]*model.Datum, filter Filter, iterator func(model.Identifier, model.Datum)) {
	for identifier, dataRow := range data {
		dataMap := dataRow.DataMap()
		// TODO: move key check out of loop, or maybe not
		if fieldExists(filter.Key, dataMap) {
			if dataMap[filter.Key] == filter.Value {
				iterator(identifier, *dataRow)
			}
		}
	}
}

func (f Filter) Filter(data map[model.Identifier]*model.Datum) map[model.Identifier]*model.Datum {
	filteredData := make(map[model.Identifier]*model.Datum)

	filter(data, f, func(id model.Identifier, dataRow model.Datum) {
		filteredData[id] = &dataRow
	})
	return filteredData
}

func (f Filter) Iterate(data map[model.Identifier]*model.Datum, iterator func(model.Identifier, model.Datum)) {
	filter(data, f, func(id model.Identifier, dataRow model.Datum) {
		iterator(id, dataRow)
	})
}