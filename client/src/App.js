import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css'
import { Login } from './Compound/Login';
import { Optionpage } from './Compound/stock';
import { Bookstock } from './Compound/Bookstock';
import { Member } from './Compound/MemberDetails';
import { Transaction } from './Compound/transaction';
import { AddingBook } from './Compound/Addingbook';
import { Addingmember } from './Addmember';
import { IssueBook } from './Compound/IssueBook';
import { Bookupda } from './Compound/bookupdate';
import { Back } from './Compound/backimg';

function App() {
  return (
  
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/Details' element={[<Optionpage/>,<Back/>]}/>
      <Route path='/Books'  element={[<Optionpage/>,<Bookstock/>]}/>
      <Route path='/Memberlistpage' element={[<Optionpage/>,<Member/>]}/>
      <Route path='/Transanactionpage' element={[<Optionpage/>,<Transaction/>]}/>
      <Route path='/Adding'  element={[<AddingBook/>]}/>
      <Route path='/bookupdate/:book_id'  element={[<Bookupda/>]}/>
      <Route path='/Addinguser'  element={[<Addingmember/>]}/>
      <Route path='/order' element={[<IssueBook/>]}/>
      <Route path='/img' element={[<Back/>]}/>,
    </Routes> 
    </BrowserRouter>
  );
}

export default App;
