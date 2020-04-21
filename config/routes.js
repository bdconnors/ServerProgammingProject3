module.exports = {
        COMPANY:[
            {method:'delete',path:'/CompanyServices/company',endpoint:'delete'},
        ],
        DEPARTMENT:[
            {method:'get',path:'/CompanyServices/departments',endpoint:'index'},
            {method:'post',path:'/CompanyServices/department',endpoint:'create'},
            {method:'get',path:'/CompanyServices/department',endpoint:'retrieve'},
            {method:'put',path:'/CompanyServices/department',endpoint:'update'},
            {method:'delete',path:'/CompanyServices/department',endpoint:'delete'}

        ],
        EMPLOYEE:[
            {method:'get',path:'/CompanyServices/employees',endpoint:'index'},
            {method:'post',path:'/CompanyServices/employee',endpoint:'create'},
            {method:'get',path:'/CompanyServices/employee',endpoint:'retrieve'},
            {method:'put',path:'/CompanyServices/employee',endpoint:'update'},
            {method:'delete',path:'/CompanyServices/employee',endpoint:'delete'}
        ],
        TIMECARD:[
            {method:'get',path:'/CompanyServices/timecards',endpoint:'index'},
            {method:'post',path:'/CompanyServices/timecard',endpoint:'create'},
            {method:'get',path:'/CompanyServices/timecard',endpoint:'retrieve'},
            {method:'put',path:'/CompanyServices/timecard',endpoint:'update'},
            {method:'delete',path:'/CompanyServices/timecard',endpoint:'delete'}
        ]

};
