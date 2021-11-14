import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';

const ApprovalWithLabel = ({label, val}) => (
    <Wrapper>
        <Label>{label}</Label>
        <Value>{val}</Value>
    </Wrapper>
);

// 두개가 함께 있을땐 상단 (그 사이) 에 여백을 준다
const Wrapper = styled.div`
    & + & {
        margin-top: 1rem;
    }
`;

const Label = styled.div`
    font-size: 1rem;
    color: ${oc.gray[6]};
    margin-bottom: 0.25rem;
`;

const Value = styled.div`
    width: auto;
    border: 2px solid ${oc.gray[3]};
    outline: none;
    border-radius: 0px;
    font-size: 1.4rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    height:auto;

`;

export default ApprovalWithLabel;