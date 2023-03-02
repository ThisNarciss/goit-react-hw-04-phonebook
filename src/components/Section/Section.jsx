import PropTypes from 'prop-types';
import { SectionBox, Title, TitleBox, IconPhone } from './Section.styled';

export function Section({ title, children }) {
  return (
    <SectionBox>
      <TitleBox>
        {title.toLowerCase() === 'phonebook' && <IconPhone size={30} />}
        <Title>{title}</Title>
      </TitleBox>
      {children}
    </SectionBox>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};
