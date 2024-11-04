from locust import HttpUser, task, between
import random

class WebsiteUser(HttpUser):
    wait_time = between(1, 5)  # Tunggu antara 1 hingga 5 detik sebelum request

    @task
    def get_users(self):
        # Mengirimkan permintaan GET ke endpoint /users
        self.client.get("/users")

    @task
    def get_user_by_id(self):
        # Mengirimkan permintaan GET ke endpoint /users/{id} untuk mendapatkan detail pengguna
        user_id = random.randint(1, 10)  # Mengambil ID pengguna acak antara 1 hingga 10
        self.client.get(f"/users/{user_id}")

    @task
    def create_user(self):
        # Mengirimkan permintaan POST ke endpoint /users untuk menambahkan pengguna baru
        new_user = {
            "name": "John Doe",
            "username": "johndoe",
            "email": "johndoe@example.com"
        }
        self.client.post("/users", json=new_user)

    @task
    def update_user(self):
        # Mengirimkan permintaan PUT ke endpoint /users/{id} untuk memperbarui data pengguna
        user_id = random.randint(1, 10)  # Mengambil ID pengguna acak antara 1 hingga 10
        updated_user = {
            "name": "Jane Doe",
            "username": "janedoe",
            "email": "janedoe@example.com"
        }
        self.client.put(f"/users/{user_id}", json=updated_user)

    @task
    def delete_user(self):
        # Mengirimkan permintaan DELETE ke endpoint /users/{id} untuk menghapus pengguna
        user_id = random.randint(1, 10)  # Mengambil ID pengguna acak antara 1 hingga 10
        self.client.delete(f"/users/{user_id}")
