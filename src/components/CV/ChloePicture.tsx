import { styled } from "styled-components";
import profile from "../../Images/profileImg.jpg";

interface ChloePictureProps {
  className?: string;
}

const ChloePicture = ({ className }: ChloePictureProps) => {
  return (
    <div className={className}>
      <div>
        <img src={profile} alt="chloe" width="200" />
      </div>
    </div>
  );
};

const StyledChloePicture = styled(ChloePicture)`
  padding: 0;
  img {
    height: 200px;
    object-fit: cover;
    border-radius: 100%;
    @media (max-width: 600px) {
      height: 150px;
      width: 150px;
    }
  }
  &:before {
    content: "";
    width: 215px;
    height: 215px;
    border: 4px dotted red;
    transform: translateY(-51%) translateX(-50%);
    top: 64.4%;
    left: 17.4%;
    position: absolute;
    z-index: 10;
    border-radius: 50%;
  }
`;

export default StyledChloePicture;
