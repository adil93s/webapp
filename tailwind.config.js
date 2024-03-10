/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,ts}"],
    theme: {
        borderWidth: {
            DEFAULT: "1px",
            0: "0",
            0.5: "0.5px",
            1: "1px",
            2: "2px",
            4: "4px",
            8: "8px",
        },
        colors: {
            // Base
            transparent: "transparent",
            primary: "#232E35",
            secondary: "#7E74F1",
            tertiary: "#EAE6FE",
            light: "#FBFBFB",
            "light-2": "#F5F5F5",
            "light-3": "#F1F1F1",
            grey: "#656D72",

            warning: "#FF9F10",
            "warning-light-1": "#FFEDD2",
            "warning-light-2": "#FFFCF8",

            danger: "#FA5353",
            "danger-dark": "#D34848",
            "danger-light-1": "#F8E8E8",
            "danger-light-2": "#FFF9F8",

            info: "#4162FF",
            "info-light-1": "#E8EBF8",
            "info-light-2": "#F8FBFF",

            success: "#4EC53B",
            "success-light-1": "#E6F5E6",
            "success-light-2": "#F8FFF8",
        },
        container: {
            center: true,
            padding: {
                DEFAULT: "1rem",
                sm: "2rem",
                lg: "4rem",
                xl: "5rem",
                "2xl": "6rem",
            },
        },
        extend: {
            aspectRatio: {
                "4/3": "4/3",
            },
            boxShadow: {
                card: "0px 8px 16px 0px rgba(0, 0, 0, 0.03)",
            },
            animation: {
                rotate: "rotate 1.5s ease-in-out",
                float: "float 3s ease-in-out infinite",
            },
            backgroundImage: {
                wave: "url('/assets/backgrounds/wave.svg')",
            },
            borderRadius: {
                12: "12rem",
                16: "16rem",
                32: "32rem",
            },
            flexBasis: {
                "1/8": "12.5%",
            },
            height: {
                dvh: "100vh",
            },
            keyframes: {
                rotate: {
                    "0%": { transform: "rotate(-180deg)" },
                },
                float: {
                    "0%, 100%": { transform: "translateY(0)" },
                    "50%": { transform: "translateY(-15px)" },
                },
            },
            lineHeight: {
                "4-75": "4.75rem",
                4: "4rem",
                12: "3rem",
                13: "3.25rem",
                14: "3.5rem",
                16: "4rem",
                18: "4.5rem",
            },
            margin: {
                18: "4.5rem",
            },
            maxWidth: {
                "3/4": "75%",
            },
            minWidth: {
                18: "18rem",
            },
            fontSize: {
                xxs: "10px",
            },
        },
        fontFamily: {
            inter: ["Inter"],
        },
        screens: {
            xs: "390px",
            sm: "640px",
            md: "768px",
            lg: "1024px",
            xl: "1280px",
            "2xl": "1536px",
        },
    },
    plugins: [require("tailwindcss-inner-border"), require("flowbite/plugin")],
};
