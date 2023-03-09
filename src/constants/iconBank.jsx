const iconBank = {
    arrowDown: {
        markup: `<svg xmlns="http://www.w3.org/2000/svg" __height__  __width__ viewBox="0 0 24 24" __fill__ ><path d="M0 0h24v24H0V0z" fill="none"/><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/></svg>`,
        defaultStyles: {
            width: 24,
            heigth: 24,
            fill: "#87879c"
        }
    },
    arrowUp: {
        markup:  `<svg xmlns="http://www.w3.org/2000/svg" __height__  __width__ viewBox="0 0 24 24" __fill__ ><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14l-6-6z"/></svg>`,
        defaultStyles: {
            width: 24,
            heigth: 24,
            fill: "#87879c"
        }
    },
    notification: {
        markup: `<svg xmlns="http://www.w3.org/2000/svg" __height__ viewBox="0 96 960 960" __width__ >
        <path d="M160 856v-60h84V490q0-84 49.5-149.5T424 258v-29q0-23 16.5-38t39.5-15q23 0 39.5 15t16.5 38v29q81 17 131 82.5T717 490v306h83v60H160Zm320-295Zm0 415q-32 0-56-23.5T400 896h160q0 33-23.5 56.5T480 976ZM304 796h353V490q0-74-51-126t-125-52q-74 0-125.5 52T304 490v306Z" __fill__ />
        </svg>`,
        defaultStyles: {
            width: 30,
            heigth: 30,
            fill: "#87879c"
        }
    },
    dashboard: {
        markup:  `<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" __height__  __width__ viewBox="0 0 24 24" __fill__ ><g><rect fill="none" height="24" width="24"/></g><g><g><g><path d="M3,3v8h8V3H3z M9,9H5V5h4V9z M3,13v8h8v-8H3z M9,19H5v-4h4V19z M13,3v8h8V3H13z M19,9h-4V5h4V9z M13,13v8h8v-8H13z M19,19h-4v-4h4V19z"/></g></g></g></svg>`,
        defaultStyles: {
            width: 24,
            heigth: 24,
            fill: "#87879c"
        }
    },
    board: {
        markup: `<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" __height__  __width__ viewBox="0 0 24 24"  __fill__ ><g><rect fill="none" height="24" width="24"/><path d="M20,6h-8l-2-2H4C2.9,4,2.01,4.9,2.01,6L2,18c0,1.1,0.9,2,2,2h16.77c0.68,0,1.23-0.56,1.23-1.23V8C22,6.9,21.1,6,20,6z M20,18L4,18V6h5.17l2,2H20V18z M18,12H6v-2h12V12z M14,16H6v-2h8V16z"/></g></svg>`,
        defaultStyles: {
            width: 24,
            heigth: 24,
            fill: "#87879c"
        }
    },
    feed: {
        markup: `<svg xmlns="http://www.w3.org/2000/svg" __height__  __width__ viewBox="0 0 24 24" __fill__ ><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"/></svg>`,
        defaultStyles: {
            width: 24,
            heigth: 24,
            fill: "#87879c"
        }
    },
    message: {
        markup: `<svg xmlns="http://www.w3.org/2000/svg" __height__  __width__ viewBox="0 0 24 24" __fill__ ><path d="M0 0h24v24H0V0z" fill="none"/><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.17L4 17.17V4h16v12zM7 9h2v2H7zm8 0h2v2h-2zm-4 0h2v2h-2z"/></svg>`,
        defaultStyles: {
            width: 24,
            heigth: 24,
            fill: "#87879c"
        }
    },
    members: {
        markup:  `<svg xmlns="http://www.w3.org/2000/svg" __height__  __width__ viewBox="0 0 24 24" __fill__ ><path d="M0 0h24v24H0V0z" fill="none"/><path d="M9 13.75c-2.34 0-7 1.17-7 3.5V19h14v-1.75c0-2.33-4.66-3.5-7-3.5zM4.34 17c.84-.58 2.87-1.25 4.66-1.25s3.82.67 4.66 1.25H4.34zM9 12c1.93 0 3.5-1.57 3.5-3.5S10.93 5 9 5 5.5 6.57 5.5 8.5 7.07 12 9 12zm0-5c.83 0 1.5.67 1.5 1.5S9.83 10 9 10s-1.5-.67-1.5-1.5S8.17 7 9 7zm7.04 6.81c1.16.84 1.96 1.96 1.96 3.44V19h4v-1.75c0-2.02-3.5-3.17-5.96-3.44zM15 12c1.93 0 3.5-1.57 3.5-3.5S16.93 5 15 5c-.54 0-1.04.13-1.5.35.63.89 1 1.98 1 3.15s-.37 2.26-1 3.15c.46.22.96.35 1.5.35z"/></svg>`,
        defaultStyles: {
            width: 24,
            heigth: 24,
            fill: "#87879c"
        }
    },
    allTasks: {
        markup: `<svg xmlns="http://www.w3.org/2000/svg" __height__  __width__ viewBox="0 0 24 24" __fill__ ><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zM17.99 9l-1.41-1.42-6.59 6.59-2.58-2.57-1.42 1.41 4 3.99z"/></svg>`,
        defaultStyles: {
            width: 24,
            heigth: 24,
            fill: "#87879c"
        }
    },
    sort: {
        markup: `<svg xmlns="http://www.w3.org/2000/svg" __height__  __width__ viewBox="0 0 24 24" __fill__ ><path d="M0 0h24v24H0V0z" fill="none"/><path d="M9 3L5 6.99h3V14h2V6.99h3L9 3zm7 14.01V10h-2v7.01h-3L15 21l4-3.99h-3z"/></svg>`,
        defaultStyles: {
            width: 24,
            heigth: 24,
            fill: "#87879c"
        }
    },
    filter: {},
    moreDots: {
        markup: `<svg xmlns="http://www.w3.org/2000/svg" __height__  __width__ viewBox="0 96 960 960" __fill__ ><path d="M189.451 632.13q-23.016 0-39.581-16.31-16.566-16.311-16.566-39.619 0-23.766 16.554-40.049 16.553-16.282 39.798-16.282 22.948 0 39.994 16.282 17.046 16.283 17.046 39.647 0 23.766-17.114 40.049-17.115 16.282-40.131 16.282Zm290.75 0q-23.766 0-40.049-16.31-16.282-16.311-16.282-39.619 0-23.766 16.31-40.049 16.311-16.282 39.619-16.282 23.766 0 40.049 16.282 16.282 16.283 16.282 39.647 0 23.766-16.282 40.049-16.283 16.282-39.647 16.282Zm290.163 0q-23.72 0-40.39-16.31-16.67-16.311-16.67-39.619 0-23.766 16.809-40.049 16.809-16.282 40.413-16.282 23.604 0 40.17 16.282 16.565 16.283 16.565 39.647 0 23.766-16.705 40.049-16.705 16.282-40.192 16.282Z"/></svg>`,
        defaultStyles: {
            width: 48,
            heigth: 48,
            fill: "#87879c"
        }
    },
};

export default iconBank;