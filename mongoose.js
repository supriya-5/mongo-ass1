const mongoose = require("mongoose")

const url = "mongodb://127.0.0.1:27017/Human_resource"

const data = mongoose.Schema({
  firstName: String,
  lastName: String,
  salary: Number,
  department: String,
  lastCompany: String,
  lastSalary: Number,
  overallExp: Number,
  contactInfo: Number,
  yearGrad: Number,
  gradStream: String
})

var details = [{"firstName": "John",
"lastName": "Doe",
"salary": "25000",
"department": "HR",
"lastCompany": "X",
"lastSalary": "10000",
"overallExp": "2",
"contactInfo": "1234567890",
"yearGrad": "2016",
"gradStream": "CSE"
},{
"firstName": "Rohan",
"lastName": "Jame",
"salary": "30000",
"department": "Technical",
"lastCompany": "Y",
"lastSalary": "15000",
"overallExp": "1",
"contactInfo": "1234567860",
"yearGrad": "2015",
"gradStream": "CSE"
},
{
"firstName": "Jame",
"lastName": "Doe",
"salary": "35000",
"department": "Accounts",
"lastCompany": "Z",
"lastSalary": "20000",
"overallExp": "1",
"contactInfo": "123567890",
"yearGrad": "2019",
"gradStream": "ECE"
},
{
"firstName": "Sao",
"lastName": "Avika",
"salary": "30000",
"department": "Sales",
"lastCompany": "Y",
"lastSalary": "15000",
"overallExp": "2",
"contactInfo": "1234567860",
"yearGrad": "2015",
"gradStream": "CSE"
},
{
"firstName": "Jame",
"lastName": "roh",
"salary": "35000",
"department": "Accounts",
"lastCompany": "Z",
"lastSalary": "15000",
"overallExp": "2",
"contactInfo": "123567890",
"yearGrad": "2019",
"gradStream": "EEE"
},
{
"firstName": "Rohan",
"lastName": "Jame",
"salary": "30000",
"department": "Technical",
"lastCompany": "Y",
"lastSalary": "15000",
"overallExp": "1",
"contactInfo": "1234567860",
"yearGrad": "2015",
"gradStream": "CSE"
},
{
"firstName": "Jame",
"lastName": "Doe",
"salary": "35000",
"department": "Accounts",
"lastCompany": "Z",
"lastSalary": "20000",
"overallExp": "1",
"contactInfo": "123567890",
"yearGrad": "2019",
"gradStream": "ECE"
},
{
"firstName": "Sao",
"lastName": "Avika",
"salary": "30000",
"department": "Sales",
"lastCompany": "Y",
"lastSalary": "15000",
"overallExp": "2",
"contactInfo": "1234567860",
"yearGrad": "2015",
"gradStream": "CSE"
},
{
"firstName": "Jame",
"lastName": "Doe",
"salary": "35000",
"department": "Accounts",
"lastCompany": "Z",
"lastSalary": "15000",
"overallExp": "2",
"contactInfo": "123567890",
"yearGrad": "2019",
"gradStream": "EEE"
},
{
"firstName": "Rohan",
"lastName": "Jame",
"salary": "30000",
"department": "Technical",
"lastCompany": "Y",
"lastSalary": "15000",
"overallExp": "1",
"contactInfo": "1234567860",
"yearGrad": "2015",
"gradStream": "CSE"
},
{
"firstName": "Jame",
"lastName": "Doe",
"salary": "35000",
"department": "Accounts",
"lastCompany": "Z",
"lastSalary": "20000",
"overallExp": "1",
"contactInfo": "123567890",
"yearGrad": "2019",
"gradStream": "ECE"
},
{
"firstName": "Sao",
"lastName": "Avika",
"salary": "30000",
"department": "Sales",
"lastCompany": "Y",
"lastSalary": "15000",
"overallExp": "2",
"contactInfo": "1234567860",
"yearGrad": "2015",
"gradStream": "CSE"
},
{
"firstName": "Jame",
"lastName": "Doe",
"salary": "35000",
"department": "Accounts",
"lastCompany": "Z",
"lastSalary": "15000",
"overallExp": "2",
"contactInfo": "123567890",
"yearGrad": "2019",
"gradStream": "EEE"
}]
