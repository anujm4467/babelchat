import PropTypes from 'prop-types';
import React from 'react';
import { TiArrowBack } from 'react-icons/ti';
import { Translate } from 'react-redux-i18n';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from '@/components/ui/button';

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Status = styled.div`
  font-size: 6em;
  line-height: 0.8em;
  color: #656565;
  margin-bottom: 2rem;
`;

const Description = styled.div`
  font-size: 1.5em;
`;

const Alternative = styled.div`
  margin: 2rem 0 4rem;
  > a {
    text-decoration: none;
    font-size: 1.2em;
  }
`;

const NotFound = ({ location: { state } }) => {
  const from = state && state.from;
  return (
    <Wrapper>
      <Status>
        404
      </Status>
      <Description>
        <Translate value={`NotFound.${from || 'default'}Route`} />
      </Description>
      <Alternative>
        <Link to={{ pathname: `/${from || ''}` }}>
          <Button
            type="button"
            primary
          >
            <TiArrowBack />
            <Translate value="NotFound.goBack" />
          </Button>
        </Link>
      </Alternative>
    </Wrapper>
  );
};

NotFound.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      route: PropTypes.string,
    }),
  }).isRequired,
};

export default NotFound;
