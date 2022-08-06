import "./featured.scss";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import KeyboardControlKeyOutlinedIcon from "@mui/icons-material/KeyboardControlKeyOutlined";

export default function Featured() {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Total Revenue</h1>
        <MoreVertOutlinedIcon fontSize="small" />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value="70" text="70%" strokeWidth={5} />
        </div>
        <p className="title">Total sale made today</p>
        <p className="amount">$420</p>
        <p className="desc">
          Previous transcation processing. Last payment may not be included.
        </p>
        <div className="summary">
          <div className="item">
            <div className="itemTitle">Traget</div>
            <div className="itemResult negative">
              <KeyboardArrowDownOutlinedIcon fontSize="small" />
              <div className="resultAmount">12.4k</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Week</div>
            <div className="itemResult positive">
              <KeyboardControlKeyOutlinedIcon fontSize="small" />
              <div className="resultAmount">12.4k</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Month</div>
            <div className="itemResult positive">
              <KeyboardControlKeyOutlinedIcon fontSize="small" />
              <div className="resultAmount">12.4k</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
