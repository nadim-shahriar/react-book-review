import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import PropTypes from 'prop-types'


const PageToRead = () => {

  const books = useLoaderData()
  console.log(books)

  const colors = ['#0088FE', '#00C46F', '#FFBB28', '#FF8042', 'red', 'pink', 'aqua', '#CD5C5C', '#00FF00', '#800080'];

  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
  };

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  const [height, setHeight] = useState(600);

  useEffect(() => {
    // Function to adjust height based on window width
    const updateHeight = () => {
      setHeight(window.innerWidth < 768 ? 300 : 600); // 300 for mobile, 600 for larger screens
    };

    // Initial height setting
    updateHeight();

    // Event listener for window resize
    window.addEventListener('resize', updateHeight);

    // Cleanup event listener on unmount
    return () => window.removeEventListener('resize', updateHeight);
  }, []);

  return (
    <ResponsiveContainer className='lg:container lg:mx-auto' width={"100%"} height={height}>
      <BarChart
        data={books}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="bookName" />
        <YAxis />
        <Tooltip></Tooltip>
        <Bar dataKey="totalPages" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
          {books.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % 20]} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>

  );
};

PageToRead.propTypes = {
  fill: PropTypes.string,       // expects a color string (e.g., "#ff0000" or "rgba(255, 0, 0, 1)")
  x: PropTypes.number,          // expects a number for the x-coordinate
  y: PropTypes.number,          // expects a number for the y-coordinate
  width: PropTypes.number,      // expects a number for the width
  height: PropTypes.number,     // expects a number for the height
}

export default PageToRead;
