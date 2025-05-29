import { defineConfig } from 'vite';
import path from 'path';
import dts from 'vite-plugin-dts';

export default defineConfig({
    build: {
        lib: {
            entry: path.resolve(__dirname, 'src/index.ts'),
            name: 'LuxScroll', // 전역 객체 이름 (브라우저에서 LuxScroll.init() 등으로 접근)
            fileName: 'lux-scroll',
            formats: ['es', 'umd'], // ✅ UMD 형식 추가
        },
        rollupOptions: {
            external: [], // 외부 의존성 (예: ky, react 등)
        },
    },
    plugins: [dts()],
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: '', // 공통 SCSS 변수 설정 시 사용
            },
        },
    },
});