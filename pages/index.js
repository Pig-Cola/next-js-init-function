/**@type {import("next").GetServerSideProps} */
export async function getServerSideProps(ctx) {
  let [foo, bar] = ['hi', 'hello']

  console.log('[in ServerSideProps] is console changed?')

  return {
    props: {
      data: { foo, bar },
    },
  }
}

/**@param {{data: {foo: string, bar: string}}} props */
export default function Home({ data: { foo, bar } }) {
  return <div>{`${foo}: ${bar}`}</div>
}
