import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 1080px;
  margin: 2.4rem auto;
  padding: 2rem;
  border-radius: 4px;
  text-align: justify;
  box-shadow: ${({ theme }) => theme.shadows.soft};
  @media (max-width: 1080px) {
    width: 88vw;
  }
  @media (max-width: 720px) {
    width: 88vw;
  }
`;

export const P = styled.p`
  font-size: ${({ theme }) => theme.sizes.medium};
  line-height: ${({ theme }) => theme.sizes.xlarge};
  text-align: justify;
  margin-bottom: 1rem;
  @media (max-width: 720px) {
    font-size: ${({ theme }) => theme.sizes.small};
  }
`;

export const Title = styled.h1`
  margin: 0 auto ${({ theme }) => theme.sizes.xxlarge};
  text-align: center;
  @media (max-width: 720px) {
    font-size: ${({ theme }) => theme.sizes.large};
  }
`;

export const Strong = styled.strong`
  font-size: ${({ theme }) => theme.sizes.medium};
  @media (max-width: 720px) {
    font-size: ${({ theme }) => theme.sizes.small};
  }
`;

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.primary};
  width: 100vw;
  padding: 1rem;
  min-height: 8vh;
  font-size: ${({ theme }) => theme.sizes.medium};
  p {
    color: ${({ theme }) => theme.colors.secondary_light};
    margin: 0.8rem;
    font-weight: 500;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 240px;
`;
export const SocialContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 100%;
  height: 32px;
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 1rem
`;
