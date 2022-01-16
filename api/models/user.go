package models

import (
	"time"

	"github.com/matthewhartstonge/argon2"
)

type User struct {
	ID       uint   `json:"id" gorm:"privateKey;autoIncrement;not null"`
	FullName string `json:"fullname" gorm:"type:varchar(200);not null"`
	Email    string `json:"email" gorm:"type:varchar(200);not null;unique"`
	Password string `json:"-" gorm:"type:varchar(255);not null"`
	IsAdmin  bool   `json:"is_admin" gorm:"type:bool;default:false"`
	// Blogs	[]Blog   `json:"blogs"`
	CreatedAt time.Time `json:"created_at"`
	UpdatedAt time.Time `json:"updated_at"`
}

func (user *User) BeforeCreate() error {
	user.Password = hashPassword(user.Password)
	return nil
}

func hashPassword(password string) string {
	argon := argon2.DefaultConfig()
	encoded, _ := argon.HashEncoded([]byte(password))
	return string(encoded)
}
