"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
function insertUser(username, password, firstName, lastName) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield prisma.user.create({
            data: {
                username,
                password,
                firstName,
                lastName
            }
        });
        console.log(res);
    });
}
function insertTodo(title, description, userId) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield prisma.todo.create({
            data: {
                title,
                description,
                userId
            }
        });
        console.log(res);
    });
}
function updateUser(usernme_1, _a) {
    return __awaiter(this, arguments, void 0, function* (usernme, { firstName, lastName }) {
        const res = yield prisma.user.update({
            where: { username: usernme },
            data: {
                firstName,
                lastName
            },
            select: {
                username: true,
                firstName: true,
                lastName: true
            }
        });
        console.log(res);
    });
}
function getUser(username) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield prisma.user.findFirst({
            where: {
                username: username
            }
        });
        console.log(res);
    });
}
//joins
function getTodosAndUserDetails(userId) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield prisma.todo.findMany({
            where: {
                userId: userId
            },
            select: {
                id: true,
                title: true,
                description: true,
                user: true
            }
        });
        console.log(res);
    });
}
getTodosAndUserDetails(1);
// insertUser("newuser2@gmail.com","newuser2","new2", "user2");
// insertTodo('todo2','newdescription todo2',1);
// updateUser("newuser2@gmail.com",{firstName:"updatedFirstName", lastName:"updatedLastName"});
// getUser("newuser2@gmail.com")
