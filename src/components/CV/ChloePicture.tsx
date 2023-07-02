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
          <h2>Front End Developer</h2>
        </div>
      </div>
    </div>
  );
};

const StyledChloePicture = styled(ChloePicture)`
  img {
    height: 200px;
    object-fit: cover;
    border-radius: 20px;
  }
`;

export default StyledChloePicture;
