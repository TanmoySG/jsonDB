package databases

import ()

const (
	NamespaceErrorFormat = "[%s] %s : %s"

	dbExists       = true
	dbDoesNotExist = false
)

// var (
// 	NamespaceAlreadyExistsError = fmt.Errorf(NamespaceErrorFormat, er.NamespaceAlreadyExistsError.ErrCode, "error creating namespace", er.NamespaceAlreadyExistsError.ErrMessage)
// 	NamespaceDoesNotExistsError = fmt.Errorf(NamespaceErrorFormat, er.NamespaceDoesNotExistsError.ErrCode, "error deleting namespace", er.NamespaceDoesNotExistsError.ErrMessage)
// )
