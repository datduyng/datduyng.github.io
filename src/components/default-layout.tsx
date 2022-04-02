import Header from "./header";

const DefaultLayout: React.FC = ({ children }) => {
  return (
    <div className={`mx-auto max-w-screen-md`}>
      <div className="flex flex-col justify-center items-center">
        <Header />
        <Spacer />
        {children}
      </div>
    </div>
  )
}

export default DefaultLayout

const Spacer = () => <div className="h-7" />;