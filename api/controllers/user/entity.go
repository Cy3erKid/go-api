package usercontroller

type UserEntity struct {
	FullName string `json:"fullname"`
	Email    string `json:"email"`
	Password string `json:"password"`
}

type InputLogin struct {
	Email    string `json:"email"`
	Password string `json:"password"`
}
