import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logo from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logo} alt="Github Explorer" />
      <Title>Explore repositories on GitHub</Title>

      <Form>
        <input placeholder="Type the repository name" />
        <button type="submit">Search</button>
      </Form>

      <Repositories>
        <a href="test">
          <img
            src="https://avatars0.githubusercontent.com/u/13343185?s=460&u=6f5abe46faf560f37aa41eebb629bf69183e98e3&v=4"
            alt="Marcelo Fernandes"
          />
          <div>
            <strong>Marcelo Fernandes</strong>
            <p>Description</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="test">
          <img
            src="https://avatars0.githubusercontent.com/u/13343185?s=460&u=6f5abe46faf560f37aa41eebb629bf69183e98e3&v=4"
            alt="Marcelo Fernandes"
          />
          <div>
            <strong>Marcelo Fernandes</strong>
            <p>Description</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="test">
          <img
            src="https://avatars0.githubusercontent.com/u/13343185?s=460&u=6f5abe46faf560f37aa41eebb629bf69183e98e3&v=4"
            alt="Marcelo Fernandes"
          />
          <div>
            <strong>Marcelo Fernandes</strong>
            <p>Description</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
