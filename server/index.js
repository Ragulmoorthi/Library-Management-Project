const express = require("express")
const cors = require("cors")
const bodyparser = require("body-parser")
const database = require("mysql")

const attach = express()

attach.use(cors())
attach.use(bodyparser.json())
attach.use(express.static("public"))
attach.use(bodyparser.urlencoded({ extended: true }))

let databaselink = database.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "ragul8754",
  database: "node"
})

databaselink.connect(function (error) {
  if (error) {
    console.log(error)
  }
  else {
    console.log("data is Connect")
  }
})

// Librarian  Login  page

attach.post('/Login', (request, respones) => {
  let { username, password } = request.body
  let sql = 'select * from librarian  where username=?'
  databaselink.query(sql, [username], (error, result) => {
    if (error) {
      respones.send({ "status": "empty_set" })
    }
    else if (result.length > 0) {
      let datausername = result[0].username
      let datapassword = result[0].password
      let datarole = result[0].role
      if (datausername == username && datapassword == password) {
        respones.send({ "status": "success", role: datarole })
      }
      else {
        respones.send({ "status": "invalid user" })
      }
    }
    else {
      respones.send({ "status": "Both_are_invalid" })
    }
  })
})
// Book Stock
attach.get('/bookstock', (request, response) => {
  let sql = 'select * from books'
  databaselink.query(sql, (error, result) => {
    if (error) {
      response.send(error)
      console.log(error)
    }
    else {
      response.send(result)
    }
  })
})
//   Adding books
attach.post('/add', (request, response) => {
  let { bookname, authorname, quantity, rent } = request.body
  let sql = 'insert into  books(title,author,quantity,fee_per_day)values(?,?,?,?)'
  databaselink.query(sql, [bookname, authorname, quantity, rent], (error, result) => {
    if (error) {
      response.send({ "status": "error" })
      console.log(error)
    }
    else {
      response.send({ "status": "success" })
    }
  })
})
// Book Update
attach.post('/bookupdate/:book_id', (request, response) => {
  let { book_id } = request.params
  let { quantity, fee_per_day } = request.body
  let sql ='update books set quantity=?,fee_per_day=? where id=?'
  databaselink.query(sql, [quantity, fee_per_day, book_id], (error, result) => {
    if (error) {
      response.send({ "status": "error" })
    }
    else {
      response.send({ "status": "success" })
    }
  })
})
//   
attach.get('/onedata/:book_id', (request, response) => {
  let { book_id } = request.params
  let sql = 'select * from books where book_id=?'
  databaselink.query(sql, [book_id], (error, result) => {
    if (error) {
      response.send(error)
    }
    else {
      response.send(result)
    }
  })
})
attach.put('/update/:book_id', (request, response) => {
  let { book_id } = request.params
  let { quantity, fees } = request.body
  let sql = 'update books set quantity=?, fee_per_day=? where book_id=? '

  databaselink.query(sql, [quantity, fees, book_id], (error, result) => {
    if (error) {
      response.send({ "status": "error" })
    }
    else {
      response.send({ "status": "updated" })
    }
  })
})
// Member Details
attach.get('/Memberlist', (request, response) => {
  let { member_id } = request.body
  let sql = 'select * from members'
  databaselink.query(sql, (error, result) => {
    if (error) {
      response.send(error)
      console.log(error)
    }
    else {
      response.send(result)
    }
  })
})
//   Member Adding page

attach.post('/newmember', (request, response) => {
  let { name, email, debt } = request.body
  let sql = 'insert into  members(name,email,outstanding_debt)values(?,?,?)'
  databaselink.query(sql, [name, email, debt], (error, result) => {
    if (error) {
      response.send({ "status": "error" })
      console.log(error)
    }
    else {
      response.send({ "status": "success" })
    }
  })
})

//   transactions Details
attach.get('/Transactionlist', (request, response) => {
  let { transaction_id } = request.body
  let sql = 'select * from transactions'
  databaselink.query(sql, (error, result) => {
    if (error) {
      response.send(error)
      console.log(error)
    }
    else {
      response.send(result)
    }
  })
})
// transaction delete
attach.post('/transactiondelete/:transaction_id', (request, response) => {
  let { transaction_id } = request.params
  let sql = 'delete from transactions where transaction_id=?'
  databaselink.query(sql, [transaction_id], (error, result) => {
    if (error) {
      response.send({ "status": "error" })
      console.log(error
      )
    }
    else {
      response.send({ "status": "success" })
    }
  })
})
//  Member Delete Method
attach.post('/delete/:member_id', (request, response) => {
  let { member_id } = request.params
  let sql = 'delete from members where member_id=?'
  databaselink.query(sql, [member_id], (error, result) => {
    if (error) {
      response.send({ "status": "error" })
      console.log(error
      )
    }
    else {
      response.send({ "status": "success" })
    }
  })
})
//  member Update
attach.put('/update/:member_id', (request, response) => {
  let { member_id } = request.params
  let { name, email, debt } = request.body
  let sql = 'update members set name=?,email=?, outstanding_debt=? where member_id=? '

  databaseconnection.query(sql, [name, email, debt, member_id], (error, result) => {
    if (error) {
      response.send({ "status": "error" })
    }
    else {
      response.send({ "status": "updated" })
    }
  })
})


// issues   
attach.post('/issuebook', (request, response) => {
  let { book_id, member_id, date, dueday } = request.body
  let bookPrice
  var outDebt
  var memId
  var totalPrice


  let priceSql = 'select fee_per_day from books where book_id = ?'
  databaselink.query(priceSql, [book_id], (error, result) => {
    if (error) {
      response.send({ "status": "error" })
      console.log(error)
    }
    else {
      bookPrice = result[0].fee_per_day
      totalPrice = bookPrice * dueday
      // console.log(bookPrice);
    }
  })

  let debtSql = 'select out_debt, member_id from transactions where member_id = ?'
  databaselink.query(debtSql, [member_id], (error, result) => {

    console.log('Entering debtSql');
    if (error) {
      response.send({ "status": "error" })
      console.log(error)
    } else {
      console.log('Entering else');
      console.log(result);
      if (result.length == 0) {
        console.log('Entering if');
        let sql = 'insert into transactions(book_id,member_id,issue_date,due_day,out_debt) values(?,?,?,?,?)'
        databaselink.query(sql, [book_id, member_id, date, dueday, totalPrice], (error, result) => {
          if (error) {
            response.send({ "status": "error" })
            console.log(error)
          }
          else {
            response.send({ "status": "success" })
          }
        })
      } else {
        
      console.log(result);
      outDebt = result[0].out_debt
      console.log(outDebt);
      console.log(totalPrice);
        var totalDebt = outDebt + totalPrice
        console.log(totalDebt);
        if (totalDebt > 500) {
         response.send({"status":"limit reached"})
        } else if (totalDebt > 0 && totalDebt < 500){
          console.log('last else if');

          let updateSql = 'update transactions set out_debt = ? where member_id = ?'
          console.log(updateSql);
          databaselink.query(updateSql, [totalDebt, member_id], (error, result) => {
            if (error) {
              response.send({ "status": "error" })
              console.log(error)
            }
            else {
              
              response.send({ "status": "success" })
            }
          })
        }
      }
    }
  })
})

// port
attach.listen(4005, () => {
  console.log("server on port 4005")
})
