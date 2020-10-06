import React from 'react';
import { connect, ConnectedProps } from 'react-redux';

import MenuItem from '../menu-item/menu-item.component';
import { AppState } from '../../redux/store';
import { selectDirectorySections } from '../../redux/directory/directory.selectors';

import './directory.styles.scss';

type DirectoryProps = ConnectedProps<typeof connector>

const Directory = ({
  sections
} : DirectoryProps) => {

  return (
    <div className='directory-menu'>
      {
        sections.map(({id, ...sectionProps}) => (
          <MenuItem key={id} {...sectionProps}/>
        ))
      }
    </div>
  );
};

const mapStateToProps = (state: AppState) => ({
  sections: selectDirectorySections(state)
});

const connector = connect(mapStateToProps);

export default connector(Directory);