import { defineConfig } from "@windicss/plugin-utils";

export default defineConfig({
    theme: {
        extend: {
            animation: {
                "appear-in": 'in-from-left 2s linear',
                keyframes: {
                    "in-from-left": {
                        '0%': { transform: 'translateX(-50vw)' },
                        '100%': { transform: 'translateX(0)' }
                    }
                }
            },
            colors: {
                primary: {
                    50: "#f2f3fd",
                    100: "#c5ccf6",
                    200: "#9aa6ef",
                    300: "#6d7de9",
                    400: "#4056e2",
                    500: "#1f37d3",
                    600: "#192ba4",
                    700: "#121f78",
                    800: "#0b144b",
                    900: "#05081f",
                },
                complementary: {
                    50: "#f5f9fa",
                    100: "#d3e5e8",
                    200: "#b2d1d7",
                    300: "#90bec6",
                    400: "#70abb5",
                    500: "#51939e",
                    600: "#40737d",
                    700: "#2f545b",
                    800: "#1d3539",
                    900: "#0c1618",
                },
                dominant: {
                    50: "#f6f5f9",
                    100: "#d9d6e6",
                    200: "#bcb6d3",
                    300: "#9e96c0",
                    400: "#8176ad",
                    500: "#665a96",
                    600: "#504776",
                    700: "#3b3456",
                    800: "#252136",
                    900: "#0f0d16",
                },
            },
        },
    },
});
