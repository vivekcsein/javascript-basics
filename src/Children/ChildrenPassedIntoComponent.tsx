import React from "react";

type ChildrenPassedIntoComponentProps = {
  children: React.ReactNode;
};
const ChildrenPassedIntoComponent = ({
  children,
}: ChildrenPassedIntoComponentProps) => {
  return (
    <div>
      <h1>Hello Parent Component</h1>
      {children
        ? React.Children.map(children, (child) => {
            return child;
          })
        : null}
    </div>
  );
};

export default ChildrenPassedIntoComponent;
