import React from 'react'
import { Header, Image, Segment} from 'semantic-ui-react'
import imag from '../../../images/personicon.png'
import imag2 from '../../../images/wj.png'

class HeaderExampleImage extends React.Component{
  render(){
    let name = 'Input Name';
    if(this.props.userId == '5aa025b0be0fe0556a75b02e'){name = 'Barrett'}
    else if(this.props.userId == '5aa025acbe0fe0556a75b02d'){name = 'Julian'}
    else if(this.props.userId == '5aa025a6be0fe0556a75b02c'){name = 'Michael'}
    return (
      <Segment clearing>
        <Header as='h2' floated='right'>
          Maid App{' '}
          <Image circular src={imag2} />
        </Header>
        <Header as='h2' floated ='left'>
          <Image circular src={imag} />
          {' '}{name}
        </Header>
      </Segment>
      )
  }
}

export default HeaderExampleImage;