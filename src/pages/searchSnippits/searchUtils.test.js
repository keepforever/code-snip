import { trimSearch } from './utils'
import { soupTestString } from '../../constants'

it('should return the index of matching inputs', () => {
  const search = "kang"
  const snipSoup = JSON.parse(soupTestString)
  expect(trimSearch(snipSoup, search)[0]).toEqual(13)
})

import SearchSnipsView from './SearchSnipsView';

it('shallow renders correctly', () => {
  // step 1: instanciate component we would like to test
  const wrapper = shallow(
    // this component needs props to render correctly, we need
    // to pass in values for those props here
    <SearchSnipsView
      toggleHelp={true}
      search='kang'
      textChange={() => {} }
      match={[]}
      snipSoup={[]}
      snips={[]}
    />
  );
  // the first time you do a snapshot test a '__snapshots__' folder is
  // created. If you changed something in SearchSnipsView, the test would
  // fail.  If you intended the change, enter 'u' into the test commands
  // and this will update snapshots.
  expect(wrapper).toMatchSnapshot()
});


it('render renders correctly', () => {
  // using 'render()' creates a more granular html output which will
  // allow you inspect the output of, for example, the text within the
  // first div tag that was rendered.
  const wrapper = render(
    <SearchSnipsView
      toggleHelp={true}
      search='kang'
      textChange={() => {} }
      match={[]}
      snipSoup={[]}
      snips={[]}
    />
  );
  // this will add a second output object to the snapshot file
  // more granular than the one created by shallow()
  expect(wrapper).toMatchSnapshot()
});

it('formats some text correctly', () => {
  // the mount() function gives us access to the full DOM and gives access
  // to text properties within tag elements.
  const wrapper = mount(
    <SearchSnipsView
      toggleHelp={true}
      search='kang'
      textChange={() => {} }
      match={[]}
      snipSoup={[]}
      snips={[]}
    />
  );
  // I can find() by the string "CursorDiv" here because in the when I
  // created the CursorDiv styled component, I added a property to it,
  // CursorDiv.displayName = "CursorDiv"
  // the .text() will then return the text within that named object.
  const text = wrapper.find("CursorDiv").text()

  console.log('\n', 'const text from test ', '\n', '\n', text )
  // an example of using enzyme to 'step through the DOM tree' and grab
  // specific things.
  expect(text).toEqual('help')
})

it('calles toggleHelp function correctly', () => {
  // spy() is like a fake function, but it allows you to ask it questions
  // after the fact.  How many times called?  What args were you sent?
  const spy = sinon.spy()

  const wrapper = mount(
    <SearchSnipsView
      toggleHelp={spy}
      search='kang'
      textChange={() => {} }
      match={[]}
      snipSoup={[]}
      snips={[]}
    />
  );
  // simulate click event on CursorDiv
  wrapper.find("CursorDiv").simulate("click")
  // after simulating click event, we can debreif spy()

  expect(spy.calledOnce).toBe(true)
  expect(spy.calledTwice).toBe(false)
})
