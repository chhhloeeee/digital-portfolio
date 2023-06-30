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
        <div>
          <p>Front End Developer</p>
        </div>
      </div>
    </div>
  );
};

const StyledChloePicture = styled(ChloePicture)`
  background-color: white;
  position: relative;
  > div {
    position: absolute;
    font-weight: bold;
  }
  img {
    height: 200px;
    object-fit: cover;
    border-radius: 20px;
  }
`;

export default StyledChloePicture;
