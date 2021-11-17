// 테이블 페이지
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Word, Domain, Term, Approval, WordUpdate, WordDetail, DomainDetail, TermDetail} from '../containers/Table';
import { TableWrapper } from '../components/Table';
import ApprovalDetail from '../containers/Table/ApprovalDetail';



class Table extends Component {

    render() {
        return (
            <TableWrapper>
                <Route exact path="/table/word" component={Word}/>
                <Route path='/table/word/update/:id' exact component={WordUpdate}/>
                <Route path='/table/word/detail/:id' exact component={WordDetail}/>
                <Route exact path="/table/domain" component={Domain}/>
                <Route path="/table/domain/detail" component={DomainDetail}/>
                <Route exact path="/table/term" component={Term}/>
                <Route path="/table/term/detail" component={TermDetail}/>
                <Route exact path="/table/approval" component={Approval}/>
                <Route path="/table/approval/detail/:id" component={ApprovalDetail}/>
            </TableWrapper>
        )
    }
}

export default Table;