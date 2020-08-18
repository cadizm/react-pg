import React from 'react'
import { Container, Grid, Header, Image, Menu } from 'semantic-ui-react'

const GridLayout = () => (
  <div>
    <Menu borderless>
      <Container>
        <Menu.Item as='a' header>
          <Image avatar size='mini' src='/cadizm.jpg' />
        </Menu.Item>
      </Container>
    </Menu>

    <Container style={{ marginTop: '2em' }}>
      <Grid stackable columns={3}>
        <Grid.Row>
          <Grid.Column>
            <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
          </Grid.Column>
          <Grid.Column>
            <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
          </Grid.Column>
          <Grid.Column>
            <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column>
            <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
          </Grid.Column>
          <Grid.Column>
            <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
          </Grid.Column>
          <Grid.Column>
            <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </div>
)

export default GridLayout
