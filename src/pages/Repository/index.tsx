import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import logo from '../../assets/logo.svg';
import { Header, RepositoryInfo, Issues } from './styles';

interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();
  return (
    <>
      <Header>
        <img src={logo} alt="Github Explorer" />
        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>
      <RepositoryInfo>
        <header>
          <img
            src="https://avatars0.githubusercontent.com/u/13343185?s=460&u=6f5abe46faf560f37aa41eebb629bf69183e98e3&v=4"
            alt="lala"
          />
          <div>
            <strong>lalalala</strong>
            <p>disajdaiojdiao</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>18080</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>18080</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>18080</strong>
            <span>Issues</span>
          </li>
        </ul>
      </RepositoryInfo>

      <Issues>
        <Link to="/">
          <div>
            <strong>lalala</strong>
            <p>lelelele</p>
          </div>

          <FiChevronRight size={20} />
        </Link>
      </Issues>
    </>
  );
};

export default Repository;
