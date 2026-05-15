# 📚 BookVerse — Frontend

> Giao diện người dùng cho nền tảng **BookVerse** — ứng dụng quản lý và khám phá sách trực tuyến.

[![Angular](https://img.shields.io/badge/Angular-v21-DD0031?style=flat-square&logo=angular&logoColor=white)](https://angular.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![SCSS](https://img.shields.io/badge/Styles-SCSS-CC6699?style=flat-square&logo=sass&logoColor=white)](https://sass-lang.com/)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)

---

## 🏗️ Kiến trúc dự án

```
src/
├── app/
│   ├── core/           # Services singleton, guards, interceptors
│   ├── features/       # Các module chức năng (lazy-loaded)
│   ├── layouts/        # Layout components (header, footer, sidebar)
│   ├── pages/          # Standalone pages (home, 404, ...)
│   ├── shared/         # Components, pipes, directives dùng chung
│   ├── app.config.ts   # Cấu hình ứng dụng
│   ├── app.routes.ts   # Định tuyến chính
│   ├── app.ts          # Root component
│   └── app.scss        # Styles root component
├── environments/       # Cấu hình môi trường (dev / prod)
├── styles.scss         # Global styles
├── index.html          # Entry HTML
└── main.ts             # Bootstrap ứng dụng
```

## ⚙️ Công nghệ sử dụng

| Công nghệ      | Phiên bản | Mô tả                  |
| -------------- | --------- | ---------------------- |
| **Angular**    | 21.2      | Framework SPA          |
| **TypeScript** | 5.9       | Ngôn ngữ lập trình     |
| **SCSS**       | —         | CSS preprocessor       |
| **RxJS**       | 7.8       | Reactive programming   |
| **Vitest**     | 4.0       | Unit testing framework |

## 🔗 Backend API

Frontend kết nối tới backend **BookVerse API** (.NET):

| Môi trường  | URL                          |
| ----------- | ---------------------------- |
| Development | `https://localhost:7158/api` |
| Production  | `http://localhost:5034/api`  |

> 📖 Backend repo: [bookverse-server](../bookverse-server/)

## 🚀 Bắt đầu

### Yêu cầu hệ thống

- **Node.js** >= 20.x
- **npm** >= 10.x
- **Angular CLI** >= 21.x

### Cài đặt

```bash
# Clone repository
git clone https://github.com/Truc5302/bookverse-frontend.git
cd bookverse-frontend

# Cài đặt dependencies
npm install
```

### Chạy development server

```bash
npm start
# hoặc
ng serve
```

Mở trình duyệt tại 👉 [http://localhost:4200](http://localhost:4200)

> Ứng dụng sẽ tự động reload khi bạn thay đổi source code.

### Build production

```bash
ng build
```

Kết quả build nằm trong thư mục `dist/`.

## 🧪 Testing

```bash
# Chạy unit tests với Vitest
ng test
```

## 📁 Cấu hình Environment

Tạo hoặc chỉnh sửa file trong `src/environments/`:

```typescript
// environment.development.ts
export const environment = {
  production: false,
  apiUrl: 'https://localhost:7158/api',
};
```

```typescript
// environment.ts (production)
export const environment = {
  production: false,
  apiUrl: 'http://localhost:5034/api',
};
```

## 🤝 Đóng góp

1. Fork repository
2. Tạo branch mới (`git checkout -b feature/ten-tinh-nang`)
3. Commit thay đổi (`git commit -m "feat: mô tả thay đổi"`)
4. Push lên branch (`git push origin feature/ten-tinh-nang`)
5. Tạo Pull Request

## 📄 License

Dự án được phân phối dưới giấy phép [MIT](LICENSE).

---

<p align="center">
  Made with ❤️ by <strong>BookVerse Team</strong>
</p>
