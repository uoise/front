// 결재 상세 페이지
import React, { Component } from 'react';
import styled from 'styled-components';
import { ApprovalWithLabel, ApprovalInputLabel, ApprovalWithLob, ApprovalInputLob } from '../../components/Table';
import ApprovalButton from '../../components/Table/ApprovalButton';
import ApprovalContent from '../../components/Table/ApprovalContent';
import axios from 'axios';

let u_id;

class TermUpdate extends Component {

    state = {
            korName:'',
            engName:'',
            shortName:'',
            meaning:''
    };

    current = {};

    loadData = async (props) => {
        const {} = this.props;
        console.log(this.props);
        u_id = this.props.match.params.id;
        axios
          .get(`/table/term/${u_id}`)
          .then(({ data }) => {
            this.current={
              id: data.term.id,
              korName: data.term.korName,
              engName: data.term.engName,
              shortName: data.term.shortName,
              meaning: data.term.meaning,
            };
            this.setState({ 
              korName: data.term.korName,
              engName: data.term.engName,
              shortName: data.term.shortName,
              meaning: data.term.meaning,
            });
          })
          .catch(e => {  // API 호출이 실패한 경우
            console.error(e);  // 에러표시
          });
      };

    componentWillMount() {
        this.loadData();
    }
    
    handleChange = (e) => {
        this.setState({
                [e.target.name] : e.target.value
        });
        console.log(this.state);
    }
    
    confirmClick = () => {
        fetch(`/term/${u_id}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              "shortName": this.state.shortName,
              "engName": this.state.engName,
              "korName": this.state.korName,
              "meaning": this.state.meaning
            }),
          })
            .then((data) => {
              console.log(data);
              alert("");
            })
            .catch((e) => console.log(e));
    }

    render (){  
        return (
            <Box1>
                    <ApprovalContent title="기존">
                        <ApprovalWithLabel label="한글명" val={this.current.korName} ></ApprovalWithLabel>
                        <ApprovalWithLabel label="영문명" val={this.current.engName}></ApprovalWithLabel>
                        <ApprovalWithLabel label="약자" val={this.current.shortName}></ApprovalWithLabel>
                        <ApprovalWithLob label="뜻" val={this.current.meaning}></ApprovalWithLob>
                    </ApprovalContent>
                    <ApprovalContent title="수정">
                        <ApprovalInputLabel label="한글명" value={this.state.korName} onChange={this.handleChange} name="korName" type="text"/>
                        <ApprovalInputLabel label="영문명" value={this.state.engName} onChange={this.handleChange} name="engName" type="text"/>
                        <ApprovalInputLabel label="약자" value={this.state.shortName}  onChange={this.handleChange} name="shortName" type="text"/>
                        <ApprovalInputLob label="뜻" value={this.state.meaning} onChange={this.handleChange} name="meaning" type="text"/>
                    </ApprovalContent>
                    <ApprovalContent>
                        <ApprovalButton onClick={this.confirmClick}>수정신청</ApprovalButton>
                    </ApprovalContent>
                </Box1> 
        )
    }
}

const Box1 = styled.div`
    overflow:auto;
`;

export default TermUpdate;