import styles from '@/styles/Emptylist.module.scss'

export const EmptyList = ({type, icon}) =>  (
        <div className={styles.div}>
            <h3>{type}</h3>
            <p>
              You currently have no {type}. Click on the {icon} icon to add
              movies to your list of {type}.
            </p>
          </div>
    )