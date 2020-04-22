const config = {
    // // ADMINs usually have full access, i.e they can do full CRUD and see all user accounts and scan results.
    // // USERs have usually only read only access and can view only their corresponding IOCs scan reports etc...
    // // This constant defines which elements should be visible and which not.
    // // Actual role privileges are, however, handled on the backend. For example, a normal user is not allowed to create
    // // a new IOC. If normal user will log in in FE running configured
    // // If I login as admin AND
    // mode: "ADMIN", // ADMIN, USER
    api_url: "http://127.0.0.1:8080/api/fe",
    auth_url: "http://localhost:8080/"
};

export default config;