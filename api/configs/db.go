package configs

import (
	"fmt"
	"os"

	"example.com/goapi-v1/models"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

var DB *gorm.DB

func Connection() {
	db_env := os.Getenv("DATABASE_DNS")

	db, err := gorm.Open(postgres.New(postgres.Config{
		DSN:                  db_env,
		PreferSimpleProtocol: true,
	}), &gorm.Config{})

	if err != nil {
		fmt.Println("Can't connect database server.")
		panic(err)
	}
	db.AutoMigrate(&models.User{})

	DB = db
}
