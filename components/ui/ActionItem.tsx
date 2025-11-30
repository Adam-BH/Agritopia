import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import ActionScaffold from '../actions/ActionScaffold';

type ActionItemProps = {
  id: string | number;
  title: string;
  time: string;
  initialCompleted?: boolean;
  onToggle?: (id: string | number) => void;
  onEdit?: (id: string | number) => void;
  onDelete?: (id: string | number) => void;
};

const ActionItem: React.FC<ActionItemProps> = ({ id, title, time, initialCompleted = false, onToggle, onEdit, onDelete }) => {
  const [completed, setCompleted] = React.useState<boolean>(initialCompleted);
  const [hidden, setHidden] = React.useState<boolean>(false);
  const [showConfirm, setShowConfirm] = React.useState<boolean>(false);

  if (hidden) return null;

  return (
    <View style={styles.itemContainer}>
      <TouchableOpacity
        onPress={() => {
          setCompleted((prev) => {
            const next = !prev;
            onToggle && onToggle(id);
            return next;
          });
        }}
        style={[styles.checkbox, completed ? styles.checkboxCompleted : styles.checkboxUncompleted]}
      >
        {completed ? (
          <MaterialCommunityIcons name="check-bold" size={28} color="#15803d" />
        ) : (
          <MaterialCommunityIcons name="checkbox-blank-circle-outline" size={28} color="#d1d5db" />
        )}
      </TouchableOpacity>

      <View style={styles.textContainer}>
        <Text style={[styles.title, completed ? styles.titleCompleted : styles.titleUncompleted]}>{title}</Text>
        <Text style={styles.time}>{time}</Text>
      </View>

      <View style={styles.actionButtons}>
        <TouchableOpacity
          onPress={() => {
            onEdit && onEdit(id);
          }}
          style={styles.actionButton}
        >
          <MaterialCommunityIcons name="pencil" size={22} color="#1f2937" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setShowConfirm(true);
          }}
          style={styles.actionButton}
        >
          <MaterialCommunityIcons name="trash-can" size={22} color="#ef4444" />
        </TouchableOpacity>
      </View>
      {showConfirm ? (
        <ActionScaffold
          visible={showConfirm}
          mode="confirm"
          title="Delete Action"
          message={`Are you sure you want to delete this action? This cannot be undone.`}
          confirmLabel="Delete"
          cancelLabel="Cancel"
          onConfirm={() => { setHidden(true); onDelete && onDelete(id); }}
          onCancel={() => {}}
          onClose={() => setShowConfirm(false)}
        />
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  checkbox: {
    width: 64,
    height: 64,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  checkboxCompleted: {
    backgroundColor: '#dcfce7',
  },
  checkboxUncompleted: {
    backgroundColor: '#f3f4f6',
  },
  checkIcon: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
  },
  titleCompleted: {
    color: '#15803d',
  },
  titleUncompleted: {
    color: '#1f2937',
  },
  time: {
    fontSize: 14,
    color: '#9ca3af',
    marginTop: 4,
  },
  actionButtons: {
    flexDirection: 'row',
    gap: 8,
  },
  actionButton: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  iconText: {
    fontSize: 20,
  },
});

export default ActionItem;

