class Api {
    constructor(token) {
        this.path = "https://api.react-learning.ru";
        this.group = "group-8";
        this.token = token;
    }
    signUp(body) {
        body.group = this.group;
        return fetch(`${this.path}/signup`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        });
    }
    signIn(body) {
        return fetch(`${this.path}/signin`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        });
    }
    passwordReset() {
        return fetch(`${this.path}/password-reset/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "authorization": `Bearer ${this.token}`
            }
        });
    }
    passwordChange(body) {
        return fetch(`${this.path}/password-reset/${this._id}/${this.token}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "authorization": `Bearer ${this.token}`
            },
            body: JSON.stringify(body)
        });
    }
    getUsers() {
        return fetch(`${this.path}/v2/group-8/users`, {
            headers: {
                "authorization": `Bearer ${this.token}`
            }
        });
    }
    getUserId() {
        return fetch(`${this.path}/v2/group-8/users/${this._id}`, {
            headers: {
                "authorization": `Bearer ${this.token}`
            }
        });
    }
    getUserToken() {
        return fetch(`${this.path}/v2/group-8/users/me`, {
            headers: {
                "authorization": `Bearer ${this.token}`
            }
        });
    }
    changeUserInfo(body) {
        return fetch(`${this.path}/v2/group-8/users/me`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "authorization": `Bearer ${this.token}`
            },
            body: JSON.stringify(body)
        });
    }
    changeUserAvatar(body) {
        return fetch(`${this.path}/v2/group-8/users/me/avatar`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "authorization": `Bearer ${this.token}`
            },
            body: JSON.stringify(body)
        });
    }
    getProducts() {
        return fetch(`${this.path}/products`, {
            headers: {
                "authorization": `Bearer ${this.token}`
            }
        });
    }
    getProductId() {
        return fetch(`${this.path}/products/${this.id}`, {
            headers: {
                "authorization": `Bearer ${this.token}`
            }
        });
    }
    addProduct(body) {
        return fetch(`${this.path}/products`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        });
    }
    changeProductId(body) {
        return fetch(`${this.path}/products/${this._id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "authorization": `Bearer ${this.token}`
            },
            body: JSON.stringify(body)
        });
    }
    deleteProductId() {
        return fetch(`${this.path}/products/${this._id}`, {
            method: "DELETE",
            headers: {
                "authorization": `Bearer ${this.token}`
            }
        });
    }

    addLike(body) {
        return fetch(`${this.path}/products/likes/${this._id}`, {
            method: "PUT",
            headers: {
                "authorization": `Bearer ${this.token}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        });
    }
    deleteLike() {
        return fetch(`${this.path}/products/likes/${this._id}`, {
            method: "DELETE",
            headers: {
                "authorization": `Bearer ${this.token}`
            }
        });
    }

    addReview(body) {
        return fetch(`${this.path}/products/review/${this._id}`, {
            method: "POST",
            headers: {
                "authorization": `Bearer ${this.token}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        });
    }
    deleteReview() {
        return fetch(`${this.path}/products/review/${this._id}/${this.reviews.id}`, {
            method: "DELETE",
            headers: {
                "authorization": `Bearer ${this.token}`
            }
        });
    }
    getReviews() {
        return fetch(`${this.path}/products/review/`, {
            headers: {
                "authorization": `Bearer ${this.token}`
            }
        });
    }
    getProductReview() {
        return fetch(`${this.path}/products/review/${this.id}`, {
            headers: {
                "authorization": `Bearer ${this.token}`
            }
        });
    }
}

export {Api};