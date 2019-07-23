import styled from 'styled-components';

const SolutionSectionWrapper = styled.section`
  padding: 110px 0 60px;
  min-height: 600px;
  overflow: hidden;

  @media (max-width: 990px) {
    padding: 0 0 30px;
  }

  @media only screen and (min-width: 1366px) {
    min-height: 895px;
  }

  .info-sec-container {
    width: 100%;
    max-width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
    @media only screen and (max-width: 991px) {
      display: none;
    }
  }

  .feature__block {
    margin: 15px 0;
    .icon__wrapper {
      flex-shrink: 0;
      position: relative;
      background: linear-gradient(
        -60deg,
        rgba(4, 49, 117, 0.9),
        rgba(159, 195, 237, 0.9)
      );
      .flaticon-flask {
        &:before {
          margin-left: 6px;
        }
      }
    }
  }

  .row {
    > .col {
      &:nth-child(2) {
        .feature__block {
          .icon__wrapper {
            background: linear-gradient(
              -60deg,
              rgba(4, 49, 117, 0.9),
              rgba(159, 195, 237, 0.9)
            );
          }
        }
      }
      &:nth-child(3) {
        .feature__block {
          .icon__wrapper {
            background: linear-gradient(
              -60deg,
              rgba(4, 49, 117, 0.9),
              rgba(159, 195, 237, 0.9)
            );
          }
        }
      }
      &:nth-child(4) {
        .feature__block {
          .icon__wrapper {
            background: linear-gradient(
              -60deg,
              rgba(4, 49, 117, 0.9),
              rgba(159, 195, 237, 0.9)
            );
          }
        }
      }
      &:nth-child(5) {
        .feature__block {
          .icon__wrapper {
            background: linear-gradient(
              -60deg,
              rgba(4, 49, 117, 0.9),
              rgba(159, 195, 237, 0.9)
            );
          }
        }
      }
      &:last-child {
        .feature__block {
          .icon__wrapper {
            background: linear-gradient(
              -60deg,
              rgba(241, 39, 17, 0.8),
              rgba(245, 175, 25, 0.8)
            );
          }
        }
      }
    }
  }
`;

export default SolutionSectionWrapper;
