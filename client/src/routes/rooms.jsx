import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Translate } from 'react-redux-i18n';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { fetch } from '@/actions/rooms';

const Listing = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 512px;
  margin: 0 auto;
  background: #fff;
  > a {
    display: flex;
    box-sizing: border-box;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    font-size: 1.5em;
    padding: 0.5rem 1rem;
    color: #000;
    text-decoration: none;
    &.full {
      opacity: 0.5;
      pointer-events: none;
    }
    > strong > img {
      width: 1.5rem;
      height: 1.125rem;
      margin-right: 1rem;
      vertical-align: middle;
    }
    &:hover {
      background: #bbb;
    }
  }
  > h1 {
    box-sizing: border-box;
    width: 100%;
    margin: 0 0 1rem;
    padding: 1rem;
    border-bottom: 1px solid #aaa;
  }
`;

class Rooms extends PureComponent {
  componentDidMount() {
    const { fetch } = this.props;
    fetch();
  }

  render() {
    const { list } = this.props;
    return (
      <Listing>
        <h1>Rooms</h1>
        {list.map(({
          flag,
          name,
          peerLimit,
          peers,
          slug,
        }) => (
          <Link
            key={slug}
            to={{ pathname: `/${slug}` }}
            className={peers >= peerLimit ? 'full' : ''}
          >
            <strong>
              <img
                src={`${__COUNTRY_FLAGS_CDN__}${flag}.svg`}
              />
              {name}
            </strong>
            <Translate
              count={peers}
              limit={peerLimit}
              value="Rooms.peers"
            />
          </Link>
        ))}
      </Listing>
    );
  }
}

Rooms.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    flag: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    peerLimit: PropTypes.number.isRequired,
    peers: PropTypes.number.isRequired,
    slug: PropTypes.string.isRequired,
  })).isRequired,
  fetch: PropTypes.func.isRequired,
};

export default connect(
  ({
    rooms: { list },
  }) => ({
    list,
  }),
  {
    fetch,
  }
)(Rooms);
