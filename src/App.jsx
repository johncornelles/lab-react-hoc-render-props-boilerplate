import React from 'react';
import './App.css';
import LikeImage from './components/LikeImage';
import LikePost from './components/LikePost';
import HOC from './components/Hoc/HOC';
import LikeImageHOC from './components/Hoc/LikeImageHOC';
import LikePostHOC from './components/Hoc/LikePostHOC';
import RenderPropsComponent from './components/RenderProps/RenderPropsComponent';
import LikeImageRender from './components/RenderProps/LikeImageRender';
import LikePostRender from './components/RenderProps/LikePostRender';

const NewLikeImageHOC = HOC(LikeImageHOC);
const NewLikePostHOC = HOC(LikePostHOC);

function App() {
  return (
    <div>
      <h3>Some Blog</h3>
      <div className='normal'>
        <LikeImage/>
        <LikePost />
      </div>
      <div className='buttons HOC'>
      <h1>Hoc</h1>
        <NewLikeImageHOC />
        <NewLikePostHOC />
      </div>
      <div className='render-props'>
      <h1>Render props</h1>
        <RenderPropsComponent
          render={(count, increment) => (
              <LikeImageRender count={count} increment={increment} />
            )}
        />
        <RenderPropsComponent
          render={(count, increment) => (
              <LikePostRender count={count} increment={increment} />
            )}
        />
      </div>
    </div>
  );
}
export default App;