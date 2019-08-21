import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { space, layout, color, typography, flexbox } from "styled-system";
import { getAvatarSrcset, getImageSrc } from "utils/getImgSrc";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  ${flexbox}
`;

const Subtitle = styled.h4`
margin: 0;
text-transform: uppercase;
  ${layout}
  ${space}
  ${color}
  ${typography}
`;

const Title = styled.h1`
margin: 0;
text-transform: uppercase;
  ${layout}
  ${space}
  ${color}
  ${typography}
`;

const Heading = ({ subtitle, title = "", author, date }) => {
  return (
    <Wrapper alignItems={["flex-start", "center"]}>
      {subtitle && (
        <Subtitle
          fontSize={[0, 3]}
          color="white"
          textAlign={["left", "center"]}
          mb={[3]}
        >
          {subtitle}
        </Subtitle>
      )}
      <Title
        fontSize={[4, 6]}
        color="white"
        textAlign={["left", "center"]}
        maxWidth={[810]}
        mb={[3]}
        lineHeight={[1.5]}
      >
        {title}
      </Title>
      {author && (
        <Author
          name={author.name}
          imageList={author.imageList}
          identity={author.identity}
          date={date}
        />
      )}
    </Wrapper>
  );
};

Heading.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  author: PropTypes.object,
  date: PropTypes.string
};

const AuthorWrapper = styled.div`
  display: flex;
  align-items: center;
  & > * {
    margin-right: 12px;
  }
  ${flexbox}
`;

const Pic = styled.img`
  border-radius: 50%;
  ${layout}
`;

const Role = styled.span`
  text-transform:uppercase;
  ${space}
  ${layout}
  ${color}
`;

const Date = styled.span`
  ${space}
  ${layout}
  ${color}
`;

const Author = ({ name, imageList, role = "GUEST AUTHOR", date }) => (
  <AuthorWrapper>
    <Pic
      width={[32, 64]}
      src={getImageSrc(imageList)}
      srcset={getAvatarSrcset(imageList)}
      alt={name}
    />
    <Role color="white">{role}</Role>
    {date && <Date color="white">{date}</Date>}
  </AuthorWrapper>
);

Author.propTypes = {
  name: PropTypes.string.isRequired,
  imageList: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired
};

export default Heading;
