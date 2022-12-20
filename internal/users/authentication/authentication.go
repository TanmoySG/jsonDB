package authentication

import (
	"crypto/md5"
	"crypto/sha1"
	"crypto/sha256"
	"fmt"
)

const (
	MD5    = "md5"
	SHA1   = "sha1"
	SHA256 = "sha256"

	validUser   = true
	invalidUser = false
)

type Authentication struct {
	Algorithm string
}

func Authenticate(passwordHash string) bool {
	return validUser
}

// Returns hex of Hash
func Hash(hashableString string, algorithm string) string {
	var hash string
	switch algorithm {
	case SHA1:
		hash = fmt.Sprintf("%x", sha1.Sum([]byte(hashableString)))
	case SHA256:
		hash = fmt.Sprintf("%x", sha256.Sum256([]byte(hashableString)))
	case MD5:
		hash = fmt.Sprintf("%x", md5.Sum([]byte(hashableString)))
	default:
		hash = fmt.Sprintf("%x", sha256.Sum256([]byte(hashableString)))
	}
	return hash
}
