package handlers

import (
	"github.com/TanmoySG/wunderDB/internal/privileges"
	"github.com/TanmoySG/wunderDB/internal/server/response"
	"github.com/TanmoySG/wunderDB/model"
	er "github.com/TanmoySG/wunderDB/pkg/wdb/errors"
	"github.com/gofiber/fiber/v2"
)

type database struct {
	Name string `json:"name" xml:"name" form:"name" validate:"required"`
}

func (wh wdbHandlers) CreateDatabase(c *fiber.Ctx) error {
	privilege := privileges.CreateDatabase
	var apiError *er.WdbError

	database := new(database)
	if err := c.BodyParser(database); err != nil {
		return err
	}

	entities := model.Entities{
		Databases: &database.Name,
	}

	if err := ValidateRequest(database); err != nil {
		apiError = err
	} else {
		isValid, error := wh.handleAuthenticationAndAuthorization(c, noEntities, privilege)
		if !isValid {
			apiError = error
		} else {
			apiError = wh.wdbClient.AddDatabase(model.Identifier(database.Name))
		}
	}
	resp := response.Format(privilege, apiError, nil)

	if err := SendResponse(c, resp); err != nil {
		return err
	}

	if err := wh.handleTransactions(c, resp, entities); err != nil {
		return err
	}

	return nil
}

func (wh wdbHandlers) FetchDatabase(c *fiber.Ctx) error {
	privilege := privileges.ReadDatabase

	var apiError *er.WdbError
	var fetchedDatabase *model.Database

	databaseName := c.Params("database")
	entities := model.Entities{
		Databases: &databaseName,
	}

	isValid, error := wh.handleAuthenticationAndAuthorization(c, entities, privilege)
	if !isValid {
		apiError = error
	} else {
		fetchedDatabase, apiError = wh.wdbClient.GetDatabase(model.Identifier(databaseName))
	}

	resp := response.Format(privilege, apiError, fetchedDatabase)

	if err := SendResponse(c, resp); err != nil {
		return err
	}

	if err := wh.handleTransactions(c, resp, entities); err != nil {
		return err
	}

	return nil
}

func (wh wdbHandlers) DeleteDatabase(c *fiber.Ctx) error {
	privilege := privileges.DeleteDatabase

	var apiError *er.WdbError

	databaseName := c.Params("database")
	entities := model.Entities{
		Databases: &databaseName,
	}

	isValid, error := wh.handleAuthenticationAndAuthorization(c, entities, privilege)
	if !isValid {
		apiError = error
	} else {
		apiError = wh.wdbClient.DeleteDatabase(model.Identifier(databaseName))
	}

	resp := response.Format(privilege, apiError, nil)

	if err := SendResponse(c, resp); err != nil {
		return err
	}

	if err := wh.handleTransactions(c, resp, entities); err != nil {
		return err
	}

	return nil
}
