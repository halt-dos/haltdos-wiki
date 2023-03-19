import React, { useEffect } from 'react';
import ActualDocItem from '@theme/DocItem';
import CustomFooter from '@site/src/components/CustomFooter';
import styles from './styles.module.scss';

const CustomDocItem = props => {
  useEffect(() => {
    const tables = document.querySelectorAll('table');
    tables.forEach(table => {
      const cells = table.querySelectorAll('td');
      cells.forEach(cell => {
        const codeBlocks = cell.querySelectorAll('code');
        codeBlocks.forEach(codeBlock => {
          codeBlock.innerHTML = codeBlock.innerHTML.replace(/_/g, '_<wbr>');
          codeBlock.innerHTML = codeBlock.innerHTML.replace(/\./g, '.<wbr>');
          console.log(codeBlock.innerHTML);
        });
      });
    });
  }, []);

  return (
    <div
      className={
        props.location.pathname === `/haltdos-wiki/v6/intro` || props.location.pathname === `/haltdos-wiki/v6/enterprise` || props.location.pathname === `/haltdos-wiki/v6/community` ||
        props.location.pathname === `/haltdos-wiki/intro` || props.location.pathname === `/haltdos-wiki/enterprise` || props.location.pathname === `/haltdos-wiki/community`
          ? `custom_doc_item_wrapper custom_doc_item_wrapper-x-wide`
          : `custom_doc_item_wrapper ${styles['custom_doc_item_wrapper']}`
      }
    >
      <ActualDocItem {...props} />
      <div
        className={
          props.location.pathname === `/haltdos-wiki/v6/intro` || props.location.pathname === `/haltdos-wiki/v6/enterprise` || props.location.pathname === `/haltdos-wiki/v6/community` ||
        props.location.pathname === `/haltdos-wiki/intro` || props.location.pathname === `/haltdos-wiki/enterprise` || props.location.pathname === `/haltdos-wiki/community`
            ? `custom_doc_item_footer-x-wide`
            : styles['custom_doc_item_footer']
        }
      >
        {/*<PageHelpful />*/}
        <CustomFooter />
      </div>
    </div>
  );
};

export default CustomDocItem;
