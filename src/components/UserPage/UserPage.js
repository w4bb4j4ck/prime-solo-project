import React, {Component} from 'react';
import { connect } from 'react-redux';
import Sidebar from '../Sidebar/Sidebar';
import HomeTable from '../HomeTable/HomeTable';
import RadarChart from '../RadarChart/RadarChart';
import './UserPage.css';
import LineChart from '../LineChart/LineChart';

class UserPage extends Component {

  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_RECIPES' });
  }

  radarData = [
    {
      "nutrient": "calories",
      "4/27": 93,
      "5/4": 70,
      "5/11": 98
    },
    {
      "nutrient": "protein",
      "4/27": 45,
      "5/4": 22,
      "5/11": 60
    },
    {
      "nutrient": "fat",
      "4/27": 20,
      "5/4": 50,
      "5/11": 42
    },
    {
      "nutrient": "sugar",
      "4/27": 35,
      "5/4": 9,
      "5/11": 18
    }
  ];

  lineData = [
    {
      "id": "sugar",
      "color": "hsl(319, 70%, 50%)",
      "data": [
        {
          "x": "3/9",
          "y": 180
        },
        {
          "x": "3/16",
          "y": 178
        },
        {
          "x": "3/23",
          "y": 264
        },
        {
          "x": "3/30",
          "y": 79
        },
        {
          "x": "4/6",
          "y": 38
        },
        {
          "x": "4/13",
          "y": 31
        },
        {
          "x": "4/20",
          "y": 204
        },
        {
          "x": "4/27",
          "y": 155
        },
        {
          "x": "5/4",
          "y": 79
        },
        {
          "x": "5/11",
          "y": 190
        }
      ]
    },
    {
      "id": "fat",
      "color": "hsl(89, 70%, 50%)",
      "data": [
        {
          "x": "3/9",
          "y": 75
        },
        {
          "x": "3/16",
          "y": 206
        },
        {
          "x": "3/23",
          "y": 163
        },
        {
          "x": "3/30",
          "y": 209
        },
        {
          "x": "4/6",
          "y": 171
        },
        {
          "x": "4/13",
          "y": 294
        },
        {
          "x": "4/20",
          "y": 127
        },
        {
          "x": "4/27",
          "y": 62
        },
        {
          "x": "5/4",
          "y": 256
        },
        {
          "x": "5/11",
          "y": 25
        }
      ]
    },
    {
      "id": "protein",
      "color": "hsl(95, 70%, 50%)",
      "data": [
        {
          "x": "3/9",
          "y": 142
        },
        {
          "x": "3/16",
          "y": 297
        },
        {
          "x": "3/23",
          "y": 176
        },
        {
          "x": "3/30",
          "y": 98
        },
        {
          "x": "4/6",
          "y": 113
        },
        {
          "x": "4/13",
          "y": 280
        },
        {
          "x": "4/20",
          "y": 228
        },
        {
          "x": "4/27",
          "y": 229
        },
        {
          "x": "5/4",
          "y": 108
        },
        {
          "x": "5/11",
          "y": 25
        }
      ]
    },
    {
      "id": "calories",
      "color": "hsl(88, 70%, 50%)",
      "data": [
        {
          "x": "3/9",
          "y": 264
        },
        {
          "x": "3/16",
          "y": 8
        },
        {
          "x": "3/23",
          "y": 258
        },
        {
          "x": "3/30",
          "y": 11
        },
        {
          "x": "4/6",
          "y": 257
        },
        {
          "x": "4/13",
          "y": 234
        },
        {
          "x": "4/20",
          "y": 144
        },
        {
          "x": "4/27",
          "y": 166
        },
        {
          "x": "5/4",
          "y": 9
        },
        {
          "x": "5/11",
          "y": 182
        }
      ]
    }
  ];

  render() {
    return (
      <div className="main-container">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="main-data">
          <h2 id="welcome">
            Welcome, {this.props.user.last_name}!
          </h2>
          <h4>Nutrition Stats</h4>
          <div className="chart">
            <LineChart data={this.lineData} />
            {/* <RadarChart data={this.radarData} /> */}
          </div>
          <HomeTable recipes={this.props.recipes} user={this.props.user} />
        </div>
      </div>
    )
  }
};

// Instead of taking everything from state, we just want the user info.
// if you wanted you could write this code like this:
// const mapStateToProps = ({user}) => ({ user });
const mapStateToProps = state => ({
  user: state.user,
  recipes: state.recipes
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(UserPage);
