import { createProxyMiddleware } from 'http-proxy-middleware';
import dotenv from "dotenv";

dotenv.config();

export default function (app) {
    app.use(
        createProxyMiddleware('/chat', {
            target: process.env.PORT || "http://localhost:3001",
            changeOrigin: true
        })
    );
};