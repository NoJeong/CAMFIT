from locust import HttpUser, between, task

class WebsiteUser(HttpUser):
    wait_time = between(5, 15)
    
    @task
    def login(self):
        self.client.post("/api/accounts/api-token-auth/", {
            "username": "qqqq@qqqq.com",
            "password": "qwer1234"
        })
    
    # @task
    # def signup(self):
    #     self.client.post("/api/accounts/emailCheck/", {
    #         "email": "test100@test.com"
    #     })

    #     self.client.post("/api/accounts/signup/", {
    #         "username":"test100@test.com",
    #         "password":"qwer1234",
    #         "passwordcheck":"qwer1234",
    #         "category":1,
    #     })
    
    @task
    def emailcheck(self):
        self.client.post("/api/accounts/emailCheck/", {
            "email": "test100@test.com"
        })
    
    @task
    def getselftrain(self):
        self.client.get("/api/selftrains/")
    
    @task
    def getinfoboards(self):
        self.client.get("/api/infoboards/")

    @task
    def getgrasses(self):
        self.client.get("/api/grasses/", headers={'Authorization':"jwt eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxMiwidXNlcm5hbWUiOiJxcXFxQHFxcXEuY29tIiwiZXhwIjoxNjE3ODkzODEyLCJlbWFpbCI6IiIsIm9yaWdfaWF0IjoxNjE3ODA3NDEyfQ.RlK1OCLIphu3KYj5ApZsvJHkWrVnZ3iHwf9ESzphgvw"}) 

    @task
    def getfitclasses(self):
        self.client.get("/api/fitclasses/") 

    # @task
    # def postfitclasses(self):
    #     self.client.get("/api/fitclasses/", {
    #         "title":"1",
    #         "content":"1",
    #         "start_day":"2021-03-26",
    #         "end_day":"2021-04-26",
    #         "user_limit":1,
    #         "price":200
    #     },
    #     headers={'Authorization':"jwt eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJ1c2VybmFtZSI6ImNhbWZpdCIsImV4cCI6MTYxNzg5NTQ0OSwiZW1haWwiOiIiLCJvcmlnX2lhdCI6MTYxNzgwOTA0OX0.uJMr3z2BNgFCmnDRCOxNKULYW0v2qj9f7jNXVvq_hI4"}) 
    
    @task
    def getinfoboards7(self):
        self.client.get("/api/infoboards/7/detail")    
    
    @task
    def getmainpage(self):
        self.client.get("/")