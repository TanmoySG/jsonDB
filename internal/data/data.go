package data

import (
	"github.com/TanmoySG/wunderDB/internal/filter"
	"github.com/TanmoySG/wunderDB/internal/metadata"
	"github.com/TanmoySG/wunderDB/model"
	"github.com/TanmoySG/wunderDB/pkg/schema"
	"github.com/TanmoySG/wunderDB/pkg/utils/maps"
	er "github.com/TanmoySG/wunderDB/pkg/wdb/errors"
)

type Data struct {
	Data   map[model.Identifier]*model.Datum
	Schema model.Schema
}

func UseCollection(collection model.Collection) Data {
	return Data{
		Data:   collection.Data,
		Schema: collection.Schema,
	}
}

func (d Data) Add(dataId model.Identifier, data interface{}) *er.WdbError {
	s, err := schema.UseSchema(d.Schema)
	if err != nil {
		return err
	}

	isValid, err := s.Validate(data)
	if err != nil {
		return err
	}

	if !isValid {
		return &er.SchemaValidationFailed
	}

	d.Data[dataId] = &model.Datum{
		Identifier: model.Identifier(dataId),
		Data:       data,
		Metadata:   metadata.New().BasicChangeMetadata(),
	}

	return nil
}

func (d Data) Read(filters interface{}) (map[model.Identifier]*model.Datum, *er.WdbError) {
	if filters != nil {
		f, err := filter.UseFilter(filters)
		if err != nil {
			return nil, err
		}

		filteredData := f.Filter(d.Data)
		return filteredData, nil
	}
	return d.Data, nil
}

func (d Data) Update(updatedData interface{}, filters interface{}) *er.WdbError {
	if filters == nil {
		return &er.FilterMissingError

	}

	f, err := filter.UseFilter(filters)
	if err != nil {
		return err
	}

	var iterError *er.WdbError

	f.Iterate(d.Data, func(identifier model.Identifier, dataRow model.Datum) {

		data, err := maps.Merge(maps.Marshal(updatedData), dataRow.DataMap())
		if err != nil {
			iterError = &er.DataEncodeDecodeError
		} else {
			schema, err := schema.UseSchema(d.Schema)

			if err != nil {
				iterError = err
			} else {
				isValid, err := schema.Validate(data)
				if err == nil && isValid {
					d.Data[identifier].Data = &data
					d.Data[identifier].Metadata = metadata.Use(d.Data[identifier].Metadata).BasicChangeMetadata()
				}
				iterError = err
			}
		}
	})

	if iterError != nil {
		return iterError
	}
	return nil
}

func (d Data) Delete(filters interface{}) *er.WdbError {
	if filters != nil {
		f, err := filter.UseFilter(filters)
		if err != nil {
			return err
		}

		f.Iterate(d.Data, func(identifier model.Identifier, dataRow model.Datum) {
			delete(d.Data, identifier)
		})
		return nil
	}
	return &er.FilterMissingError
}
