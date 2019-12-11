var vueRoot = new window.Vue({

    el: "#root",

    data: {
        signedIn: true,

        newEntry: {
            content: "",
            date: "",
        },

        currUser: {
            name: "",
            entries: [{
                content: "Today I caught a frog!",
                date: "Friday the 13th",
            }],
        },

        // users: [],

    },

    methods: {
        async getDiaryUser() {
            try {
                let response = await window.axios.get("/api/" + this.currUser.name);
                this.currUser = response.data;
                this.signedIn = true;
                return true;
            }
            catch (error) {
                console.log(error);
            }
        },

        async addDiaryEntry() {

        }

        // async getList() {
        //     try {
        //         let response = await window.axios.get("/api");
        //         this.users = response.data;
        //         return true;
        //     }
        //     catch (error) {
        //         console.log(error);
        //     }
        // },
    },


});
