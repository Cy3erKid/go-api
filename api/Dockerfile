#build stage
FROM golang:1.17-alpine AS builder
RUN apk add --no-cache git
WORKDIR /var/www/api
COPY go.mod ./
COPY go.sum ./
RUN go get -v github.com/cosmtrek/air

RUN go get -u gorm.io/gorm
RUN go get -u gorm.io/driver/postgres
RUN go mod download

COPY *.go ./

#RUN go build -o /member-api

#EXPOSE 8080
ENTRYPOINT [ "air" ]
CMD ["/api"]

#final stage
# FROM alpine:latest
# RUN apk --no-cache add ca-certificates
# COPY --from=builder /go/bin/app /app
# ENTRYPOINT /app
# LABEL Name=fullstack Version=0.0.1
# EXPOSE 5000
